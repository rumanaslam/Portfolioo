import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="bg-[#AA5486] py-20 text-white">
      <div className="container mx-auto px-6 text-center md:text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-out-down">
          About Me
        </h2>

        {/* Image and Text */}
        <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row md:items-center md:justify-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/pic.png"
              alt="Profile"
              width={224} // Width of the image in pixels (56 x 4 for `md:w-56`)
              height={224} // Height of the image in pixels (56 x 4 for `md:h-56`)
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* About Text */}
          <div className="max-w-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              Hello, I am Ruman a passionate and hardworking web developer. My journey began in sales and marketing, where I earned my bachelor&apos;s degree. However, my heart was set on web development, and I have been working tirelessly to hone my skills.
              <br />
              With expertise in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, I am dedicated to delivering innovative and effective solutions for my clients. Web development is not just a job for me, it&apos;s my passion. My dream is to establish my own software house, where I can provide top-notch solutions for my clients. When I&apos;m not coding, you can find me exploring new places and experiencing different cultures.
              <br />
              I am excited to collaborate with you and bring your vision to life. Let&apos;s create something amazing together!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
