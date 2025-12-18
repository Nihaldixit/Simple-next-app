'use client'
export default function Navbar(){
    return (
        <nav className="flex justify-between my-5 mx-5">
            <div>
                <h3 className="text-2xl mt-2 font-semibold">Events</h3>
            </div>
            <div className="flex justify-center gap-5 font-medium">
                <h4 className="mt-2 text-sm">Solutions</h4>
                <h4 className="mt-2 text-sm">Blogs</h4>
                <h4 className="mt-2 text-sm">Case Studies</h4>
                <h4 className="mt-2 text-sm">Contact Us</h4>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Get Started</button>
            </div>
        </nav>
    )
}