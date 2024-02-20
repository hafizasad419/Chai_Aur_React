export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React developers use their programming skills to create JavaScript-based applications for web or mobile environments. They typically specialize in front-end development, such as building user interfaces (UI). React developers use core front-end technologies like JavaScript, HTML, and CSS.
                        </p>
                        <p className="mt-4 text-gray-600">
                            A developer for React JS must also be knowledgeable about ES6. Based on the requirements of the client, programmers can create and maintain web apps using this version of JS. High-order functions, event handling, arrow functions, DOM manipulation, and other ES6 features are the most useful for React JS developers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}