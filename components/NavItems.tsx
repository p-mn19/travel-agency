import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems=()=>{
    const user ={
        name: 'Poornima',
        email:'poornimamen2019@gmail.com',
        imageUrl:'/assets/images/david.webp'
    }
    return(
        <section className="nav-items">
            <Link to='/' className="link-logo">
            <img src="/assets/icons/logo.svg" alt="logo"
            className="size-[30px]"/>
            <h1>VoyageHub</h1>
            </Link>
            <div className="container">
                <nav>
                {sidebarItems.map(({id,href,icon,label})=>(
                    <NavLink to={href} key={id}>
                        {({isActive}:{isActive: boolean})=>(
                            <div className={cn('group nav-item',{
                                'bg-primary-100 !text-white':isActive
                            })}>
                                <img
                                src={icon}
                                alt={icon}
                                className={`group-hover:brightness-0 size-0 group-hover:invert 
                                    ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                />
                                {label}
                            </div>
                        )}
                    </NavLink>
                ))}
                </nav>
                <footer className="nav-footer">
                <img src={user?.imageUrl || 'assets/images/david.webp'} alt={user?.name || 'David'} />
                </footer>
                <article>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </article>
                <button onClick={() =>{
                    console.log('logout')
                }}
                className="cursor-pointer">
                    <img
                    src="/assets/icons/logout.svg"
                    alt="logout"
                    className="size-6"/>

                </button>
            </div>
        </section>
    )
}

export default NavItems;