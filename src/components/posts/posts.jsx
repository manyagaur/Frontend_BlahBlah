import React from 'react';
import frens from '../../assets/frens.jpg';
import user2_dp from '../../assets/user2.jpg';

function Posts() {
    
    const posts = [
        {
            id: 1,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "Me with my friends, sharing endless laughs and creating unforgettable memories. Here’s to moments that make life so much brighter. Let’s cherish every second of this amazing journey together! 🎉❤️",
        },
        {
            id: 2,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "Surrounded by the best company, every moment feels like a beautiful celebration of love, joy, and togetherness. These people are my anchor, my energy, and my greatest source of happiness. 💕✨",
        },
        {
            id: 3,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "There’s nothing quite like the magic of making memories with your closest friends. From heartfelt conversations to uncontrollable laughter, these are the moments that fill my heart with pure gratitude. 🌟",
        },
        {
            id: 4,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "When the squad comes together, it’s a symphony of fun, laughter, and love. Here’s to the nights we’ll never forget and the friends we’ll always treasure. Cheers to making life extraordinary! 🔥🌈",
        },
        {
            id: 5,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "True friendship is a gift that keeps on giving, filling our lives with moments of joy, support, and unconditional love. Here’s to celebrating this bond every single day! 🌸💖",
        },
        {
            id: 6,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "Pictures can capture the beauty of a moment, but the people in them give life its meaning. These friendships are my greatest treasure, and I’m so grateful for every shared smile and laugh. 🌟❤️",
        },
        {
            id: 7,
            name: "Luna Lovegood",
            img: frens,
            dp: user2_dp,
            caption: "In a world full of chaos, having people who bring you peace, laughter, and love is the ultimate blessing. These moments are proof that life is best lived surrounded by those who matter most. 🌈💫",
        },
    ];

    return (
        <div className="posts grid gap-6 p-6">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="post bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={post.dp}
                            alt={`${post.name}'s profile`}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <span className="font-semibold text-lg">{post.name}</span>
                    </div>
                    <span className="text-gray-700 text-sm">{post.caption}</span>
                    <img
                        src={post.img}
                        alt="Post content"
                        className="w-full object-cover rounded-lg border"
                    />
                    <div className="flex justify-around pt-4 border-t border-gray-300 mt-4">
                        <button className="text-blue-600 hover:underline">
                            Like
                        </button>
                        <button className="text-blue-600 hover:underline">
                            Comment
                        </button>
                        <button className="text-blue-600 hover:underline">
                            Share
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
