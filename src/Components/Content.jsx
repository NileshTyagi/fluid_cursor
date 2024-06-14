import React from 'react';
import useMousePosition from './useMousePosition';
import motion_art_effect from '../assets/MotionArtEffect-logo.png';
import review_img_1 from '../assets/motionarteffect-img2.png';
import review_img_2 from '../assets/motionarteffect-img1.png';
import review_img_3 from '../assets/motionarteffect-img3.png';
import wand_image from '../assets/motionarteffect-img5.png';
import sec_img_1 from '../assets/sec1.png';
import sec_img_2 from '../assets/sec2.png';
import browse_img from '../assets/img8.png';
import feature_img_1 from '../assets/feature1.png';
import feature_img_2 from '../assets/feature2.png';
import feature_img_3 from '../assets/feature3.png';


const Content = () => {
  const { isMouseStopped } = useMousePosition();

  return (
    <div className={isMouseStopped ? '' : 'pointer-events-none'} style={{ overflowY: isMouseStopped ? 'scroll' : 'hidden' }}>
      <div className="absolute w-full h-full overflow-y-auto">
        <div className="top-0 mt-8 w-full flex justify-center">
          <div className='flex justify-between items-center w-full max-w-6xl'>
            <div className="text-white">
              <img className='h-15' src={motion_art_effect} alt="envatomarket"/>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-black bg-white m-1 px-10 py-3 rounded hover:bg-transparent hover:text-white hover:border-white pointer-events-auto"
                style={{ borderWidth: '3px', borderColor: 'transparent' }}
                onMouseEnter={(e) => e.target.style.borderColor = 'white'}
                onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                Purchase Now
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-center text-slate-200 font-bold text-6xl leading-normal tracking-wider mt-20">
          <div className="inline-block text-left">
            <p>Attract Your</p>
            <p>Visitors Attention</p>
            <p>With Colorful</p>
            <p className="bg-gradient-to-r from-orange-700 to-indigo-600 text-transparent bg-clip-text">Motion Art Effect</p>
          </div>
        </div>

        <div className="mt-10 w-full text-center text-slate-400 font-bold">
          <div className="inline-block text-left">
            <p>Unleash the power of creativity with Motion Art for Elementor - your</p>
            <p>ultimate solution for seamlessly integrating captivating animations into</p>
            <p>your website. </p>
          </div>
        </div>

        <div className="text-white pt-24 text-xl">
          <p className="flex justify-center">Trusted by thousands of users around the world</p>
        </div>
        
        <div>
          {/* Review Cards */}
          <div className="flex mt-20 pb-24 justify-around">
          {/* Review Card 1 */}
            <div className="flex items-center mr-8">
              {/* Circle with Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                <img className="h-full" src={review_img_1} alt="Review 1" />
              </div>
              <div className='flex flex-col -mt-3'>
                {/* Stars */}
              <div className="ml-4 flex items-center">
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
              </div>
              <br />
              {/* Score and Reviews */}
              <div className='ml-4 -mt-4'>
                  <p className="text-slate-300"><span className="font-bold">4.5</span> Score, 9 Reviews</p>
              </div>
              </div>
           </div>
           {/* Review Card 2 */}
           <div className="flex items-center mr-8">
              {/* Circle with Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-slate-800">
                <img className="h-full" src={review_img_2} alt="Review 1" />
              </div>
              <div className='flex flex-col -mt-3'>
                {/* Stars */}
              <div className="ml-4 flex items-center">
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
              </div>
              <br />
              {/* Score and Reviews */}
              <div className='ml-4 -mt-4'>
                  <p className="text-slate-300"><span className="font-bold">4.5</span> Score, 9 Reviews</p>
              </div>
              </div>
           </div>

           {/* Review Card 3 */}
           <div className="flex items-center mr-8">
              {/* Circle with Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-slate-800">
                <img className="h-full" src={review_img_3} alt="Review 1" />
              </div>
              <div className='flex flex-col -mt-3'>
                {/* Stars */}
              <div className="ml-4 flex items-center">
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
                <span className="text-slate-400 text-3xl">&#9733;</span>
              </div>
              <br />
              {/* Score and Reviews */}
              <div className='ml-4 -mt-4'>
                  <p className="text-slate-300"><span className="font-bold">4.5</span> Score, 9 Reviews</p>
              </div>
              </div>
           </div>
          </div>
        </div>

        {/* Wand Image */}
        <div className='flex mt-20 justify-around'>
          <div className='text-slate-300'>
            <p className='font-bold text-4xl leading-normal tracking-wider pb-3'>Turn Your Cursor Into A Colorful
              <br />
              Magic Wand & Charm Your Visitors
            </p>

            <p className='text-slate-400 tracking-wider'>
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse 
            <br />
            your website with visually stunning motion art elements.
            </p>

            <button className=' mt-6 bg-slate-600 pt-4 pb-6 pr-8 pl-8 rounded-2xl tracking-widest text-2xl bg-gradient-to-r from-blue-800 to-amber-600'>
              Purchase From Envato <span className='text-3xl'>→</span>
            </button>
          </div>

          <div>
            <img src={wand_image} alt="image" />
          </div>
        </div>

        {/* Apply Section */}
        <div className='pb-24 p-20 flex justify-center'>
          <p className='text-slate-300 text-4xl font-bold'>Apply On Any Section Or Enable 
          <br />
          <span className='flex justify-center'>For Whole Page</span></p>
        </div>

        <div className='flex justify-center text-slate-300 pb-24'>
          <div className='bg-gradient-to-b from-gray-800 to-gray-900 p-5 mr-3 rounded-3xl border-2 border-slate-700 mb-20'>
            <p className='text-xl pb-4 pt-2'>Apply On Section</p>
            <p>Apply on section is a game-changer, offering an unparalleled way to
              <br />
              manage applications directly from your website. 
            </p>
            <img src={sec_img_1} alt="img-1"/>
          </div>

          <div className='bg-gradient-to-b from-gray-800 to-gray-900 p-5 mr-3 rounded-3xl border-2 border-slate-700 mt-20'>
            <p className='text-xl pb-4 pt-2'>Apply On Page</p>
            <p>Take your website to new heights with Motion Art for Elementor. 
              <br />
              Embrace the power of motion and animation.
            </p>
            <img src={sec_img_2} alt="img-2"/>
          </div>
        </div>



        {/* Supported */}
        <div className="text-center pb-24">
          <div className='bg-gradient-to-b from-gray-800 to-gray-900 pt-10 pb-10 ml-40 mr-40 rounded-3xl border-2 border-slate-700 mb-20'>
            <p className="font-bold text-2xl leading-normal tracking-wider text-slate-300 pb-5">Supported by All Popular Browsers</p>
            <p className="mt-2 text-slate-400 pb-5">
               Rest assured, Motion Art is designed to be compatible
              <br /> with all major web browsers.
            </p>
            <div className="flex justify-center mt-4">
            <img src={browse_img} alt="" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className='pb-24 pl-20 pr-20'>
          <div className='flex flex-col  text-slate-300'>
            <div className='flex justify-center text-slate-300 text-5xl tracking-wide font-bold'>
              <p>
                An All-Round Plugin With
                <br />
                <span className='flex justify-center'>Powerful Features</span>
              </p>
            </div>
            <div className='flex justify-center text-slate-400 tracking-widest p-10'>
              <p>Whether you're a seasoned web designer or just starting out, Motion Art for 
                <br />
                Elementor seamlessly integrates with the Elementor platform, providing you 
                <br />
                <span className='flex justify-center'>with a seamless and intuitive experience.</span>
                </p>
            </div>
          </div>


          <div className="flex justify-around p-6 pr-20 pl-20">
            <div className="max-w-xs bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-slate-700">
              <img src={feature_img_1} alt="Light Weight" className="h-42 mb-4 -ml-10" />
              <h2 className="text-xl font-bold mb-2 leading-normal tracking-widest text-slate-300">Light Weight</h2>
              <p className="text-slate-400">Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="max-w-xs bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-slate-700">
              <img src={feature_img_2} alt="100% Responsive" className="h-42 mb-4 -ml-10" />
              <h2 className="text-xl font-bold mb-2 leading-normal tracking-widest text-slate-300">100% Responsive</h2>
              <p className="text-slate-400">Create a consistent visual experience across all devices.</p>
            </div>
            <div className="max-w-xs bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-slate-700">
              <img src={feature_img_3} alt="User Friendly Interface" className="h-42 mb-4 -ml-10" />
              <h2 className="text-xl font-bold mb-2 leading-normal tracking-widest text-slate-300">User Friendly Interface</h2>
              <p className="text-slate-400">Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-4 pb-16 bg-gradient-to-r from-orange-500 to-purple-600 text-white flex justify-between items-center px-8">
          <span className="text-sm">© 2023 Copywrite. All rights reserved by QodeMatrix</span>
          <div className="flex space-x-4">
            <a href="#documentation" className="text-sm hover:underline">
              Documentation
           </a>
            <a href="#support" className="text-sm hover:underline">
              Support
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Content;
