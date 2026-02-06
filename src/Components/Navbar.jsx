import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <>
            <div>
                <nav className="flex gap-5">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/aboutme"}>About me</NavLink>
                    <NavLink to={"/work"}>Work</NavLink>
                    <NavLink to={"/blogs"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </nav>
            </div>
        </>
    );
};
