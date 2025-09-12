import React from "react";
import Title from "../components/Title";
import NewletterBox from '../components/NewsletterBox'
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis
            omnis ad veritatis sint totam labore incidunt! Architecto, aliquam
            consectetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            velit odit modi iusto voluptas eius sit explicabo quaerat possimus
            ut.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            illum corrupti laboriosam voluptatem temporibus, esse mollitia,
            quisquam laborum voluptatum in, doloribus aperiam excepturi eaque
            at.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, dicta voluptatibus molestiae similique obcaecati
            reiciendis reprehenderit a provident quisquam at autem consequuntur
            unde cupiditate assumenda ducimus ipsum explicabo numquam harum?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, dicta voluptatibus molestiae similique obcaecati
            reiciendis reprehenderit a provident quisquam at autem consequuntur
            unde cupiditate assumenda ducimus ipsum explicabo numquam harum?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, dicta voluptatibus molestiae similique obcaecati
            reiciendis reprehenderit a provident quisquam at autem consequuntur
            unde cupiditate assumenda ducimus ipsum explicabo numquam harum?
          </p>
        </div>
      </div>
      <NewletterBox/>
    </div>
  );
};

export default About;
