import React, { useEffect, useState } from 'react'
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandX, IconCode, IconGitCommit, IconWorld } from '@tabler/icons-react';
export const Sidebar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [codeLineIndex, setCodeLineIndex] = useState(0);
    const [githubData, setGithubData] = useState(null);
    const [loading, setLoading] = useState(true);
    // Fetch GitHub data
    const GITHUB_USERNAME = 'ravigahire';
    
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                const userData = await userResponse.json();

                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
                const reposData = await reposResponse.json();

                // Calculate total stars
                const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

                // Calculate language stats
                const languageStats = {};
                reposData.forEach(repo => {
                    if (repo.language) {
                        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
                    }
                });

                // Convert to percentages
                const totalRepos = Object.values(languageStats).reduce((a, b) => a + b, 0);
                const languagePercentages = Object.entries(languageStats)
                    .map(([lang, count]) => ({
                        language: lang,
                        percentage: Math.round((count / totalRepos) * 100)
                    }))
                    .sort((a, b) => b.percentage - a.percentage)
                    .slice(0, 4);

                setGithubData({
                    followers: userData.followers,
                    publicRepos: userData.public_repos,
                    totalStars: totalStars,
                    languages: languagePercentages,
                    avatarUrl: userData.avatar_url,
                    bio: userData.bio
                });

                console.log(userData)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    // Animated code snippet
    const codeLines = [
        "const bit_about_me = {",
        "name: 'Ravi Gahire',",
        "role: 'Front-end developer',",
        "love: ['Code','Music','Coffee'],",
        "status: 'Always Learning'",
        "};"
    ];

    useEffect(() => {
        // Aside scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCodeLineIndex((prev) => (prev + 1) % codeLines.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);




    return (
        <>
            <aside className={`text-white bg-white dark:bg-gray-950 hidden lg:block w-[330px] lg:min-h-fit 2xl:min-h-screen fixed left-0 top-0 transition-transform duration-300 ${isScrolled ? '-translate-x-full' : 'translate-x-0'
                }`}>

                {/* My Intro section */}
                <div className="text-center py-2 2xl:py-5 3xl:py-10">
                    {/* Profile Image */}
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring ring-gray-700 dark:ring-gray-300 ring-offset-4 ring-offset-gray-900 dark:ring-offset-gray-50">
                        <img
                            className="w-full h-full object-cover"
                            src="/mypic.jpg"
                            alt="Ravi Gahire"
                        />
                    </div>
                    {/* Animated Code Snippet */}
                    <div className=" p-3 shadow-lg overflow-hidden">
                        <div className="flex items-center gap-2 mb-4">
                            <IconCode className="w-5 h-5 text-green-400" />
                            <h3 className="font-semibold text-gray-400 dark:text-gray-200">Code Philosophy</h3>
                        </div>
                        <div className="font-mono text-start text-sm space-y-1">
                            {codeLines.map((line, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${index === codeLineIndex
                                        ? 'text-green-400 translate-x-2 font-bold'
                                        : 'text-gray-400'
                                        }`}
                                >
                                    <span className="text-gray-600 mr-2">{index + 1}</span>
                                    {line}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Divider */}
                    {/* <div className="w-14 h-1 bg-amber-500 dark:bg-amber-600 mx-auto my-2 rounded-full"></div> */}
                </div>
                {/* Divider */}
                <div className="w-80 mx-auto h-px bg-amber-500 dark:bg-slate-600 rounded-full"></div>


                {/* GitHub Stats */}
                <div className="bg-inherit dark:bg-inherit rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <IconGitCommit className="w-5 h-5 text-gray-700 dark:text-green-400" />
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">GitHub Stats</h3>
                    </div>

                    {loading ? (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100 mx-auto"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Loading GitHub data...</p>
                        </div>
                    ) : githubData ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                <div className="text-center ">
                                    <div className="text-xl font-bold text-gary-600 dark:text-yellow-400">
                                        {githubData.publicRepos}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Public Repos</div>
                                </div>
                                <div className="text-center rounded-lg ">
                                    <div className="text-xl font-bold text-gray-600 dark:text-blue-400">
                                        {githubData.totalStars}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Total Stars</div>
                                </div>
                                <div className="text-center rounded-lg col-span-2 md:col-span-1">
                                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                        {githubData.followers}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Followers</div>
                                </div>
                            </div>

                            {/* Language Stats */}
                            {githubData.languages.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Top Languages</h4>
                                    <div className="space-y-3">
                                        {githubData.languages.map((lang, index) => {
                                            const colors = ['bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500'];
                                            return (
                                                <div key={index}>
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span className="text-gray-600 dark:text-gray-400">{lang.language}</span>
                                                        <span className="text-gray-500 dark:text-gray-500">{lang.percentage}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                                                        <div
                                                            className={`${colors[index % colors.length]} h-1 rounded-full transition-all duration-1000`}
                                                            style={{ width: `${lang.percentage}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-sm text-red-500">Failed to load GitHub data</p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-80 mx-auto h-px mt-4 bg-amber-500 dark:bg-slate-700 rounded-full"></div>

                <div>
                    <h3 className="text-sm font-light dark:text-gray-200 text-center my-3 tracking-wide">
                        Connect With Me
                    </h3>

                    <div className="flex gap-8 justify-center items-center">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-900 rounded-lg hover:bg-black transition-colors"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-900 rounded-lg hover:bg-black transition-colors"
                            aria-label="LinkedIn"
                        >
                            <IconBrandLinkedin className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="https://x.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-900 rounded-lg hover:bg-black transition-colors"
                            aria-label="Twitter"
                        >
                            <IconBrandX className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </div>
            </aside>


        </>
    )
}
