import frens from '../../assets/frens.jpg';
import donkey from '../../assets/user2.jpg';
import Posts from '../posts/posts';
import Cover from '../../assets/cover.jpg';

function Content() {
    return (
        <>
            <div
                className="w-full relative border-b border-gray-300 shadow-lg"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(70, 100, 50, 0.2), rgba(0, 0, 0, 0.1)), url(${Cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '40vh',
                    width: '100%',
                }}
            >
                {/* Profile Picture */}
                <div
                    className="absolute flex items-center justify-center rounded-full h-[200px] w-[200px] bottom-[-50px] left-[50%] border-4 border-white shadow-xl"
                    style={{
                        backgroundImage: `url(${donkey})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transform: 'translateX(-50%)',
                    }}
                ></div>

                {/* Name Below Profile */}
                <div
                    className="absolute text-center w-full bottom-[-70px] left-0 transform translate-y-[50%]"
                >
                    <p className="text-xl font-bold shadow-sm px-4 py-2 rounded-md inline-block">
                        Luna Lovegood
                    </p>
                </div>
            </div>

            {/* Grid Content Below */}
            <div className="grid grid-cols-12 gap-4 mt-24 px-8">
    {/* Combined Box */}
    <div className="col-span-12 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
        {/* Website Icons Section */}
        <div className="flex items-center space-x-4 mb-4">
            <a href="#" className="text-blue-600 text-lg hover:underline">🌐 Website 1</a>
            <a href="#" className="text-blue-600 text-lg hover:underline">🌐 Website 2</a>
            <a href="#" className="text-blue-600 text-lg hover:underline">🌐 Website 3</a>
        </div>

        {/* Location and Username */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mb-4">
            <p className="text-gray-600 text-sm">📍 India</p>
            <p className="text-gray-600 text-sm">@lunalovegood</p>
        </div>

        {/* Additional Info */}
        <div>
            <p className="text-gray-700 text-base">
                Luna is a creative soul who loves exploring the world of magic, art, and storytelling. Passionate about connecting with like-minded individuals.
            </p>
        </div>
    </div>
</div>


            {/* Posts Section */}
            <div className="mt-8 p-6 border border-gray-200 rounded-lg shadow-lg">
                <Posts />
            </div>
        </>
    );
}

export default Content;
