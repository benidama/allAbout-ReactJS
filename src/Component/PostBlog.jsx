import React from "react";
import bg from "/images/bg-7.png";
import post1 from "/images/post7/1.png";
import post2 from "/images/post7/2.png";
import post3 from "/images/post7/3.png";

const PostBlog = () => {
  return (
    <div className="flex flex-col justify-center">
      <main>
        <div className="flex flex-col justify-center items-center pt-14 pb-7 gap-3 bg-cyan-100/15">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] leading-10 text-cente w-[510px]">
            New invoicing features to help you get paid faster
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-center">
            Luke Matthews l November 8, 2021
          </p>
          <img
            className="w-[1200px] h-[510px] rounded-2xl rounded-t-2xl mt-5"
            src={bg}
            alt="six girls discuss on payment process"
          />
        </div>
        <article className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] text-cente">
            This is a blog post headline
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left w-[570px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <br />
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left w-[570px]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
          <h2 className="font-bold text-[rgba(29,33,48,1)] text-[25px] text-cente">
            This is a small blog post headline
          </h2>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left w-[570px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <br />
          <blockquote className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left w-[500px]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante.
          </blockquote>
          <br />
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 text-left w-[570px]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
        </article>
        <h1 className="font-bold text-[rgba(29,33,48,1)] text-[35px] text-center mt-14 mb-7">
          Read more posts
        </h1>
        <div className="flex flex-row justify-center items-center gap-4 mb-10">
          <div className="flex flex-col justify-center items-start gap-2">
            <img
              className="w-[360px] h-[230px] rounded-xl"
              src={post1}
              alt="Recurring post"
            />
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
              How to Make Recurring Invoicing More Efficient
            </h2>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
              Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
              Luke Matthews l November 8, 2021
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <img
              className="w-[360px] h-[230px] rounded-xl"
              src={post2}
              alt="Conversions post"
            />
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
              How to Reduce Checkout Abandonment for more Conversions
            </h2>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
              Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
              Luke Matthews l November 8, 2021
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <img
              className="w-[360px] h-[230px] rounded-xl"
              src={post3}
              alt="automation post"
            />
            <h2 className="font-medium text-[rgba(29,33,48,1)] text-xl w-[350px] leading-5">
              10 Customer Retention Strategies for better Dwell time
            </h2>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5 w-[360px]">
              Lorem ipsum dolor sit amet, auid kabd consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <p className="font-normal text-[rgba(29,33,48,1)] text-xs leading-5">
              Luke Matthews l November 8, 2021
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-screen pt-2 pb-14 bg-gradient-to-t from-cyan-50 to-yellow-50">
          <h1 className="font-bold text-[rgba(29,33,48,1)] text-[40px] text-center leading-10 w-[630px]">
            Are you ready to grow your business with us?
          </h1>
          <p className="font-normal text-[rgba(29,33,48,1)] text-xs text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <button className="bg-[rgba(29,33,48,1)] w-28 h-9 rounded-md text-center text-[rgba(255,255,255,1)]">
            Free trial
          </button>
        </div>
      </main>
    </div>
  );
};

export default PostBlog;
