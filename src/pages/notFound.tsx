import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        <div className=" text-[#566FA7] w-full h-full container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-x-48">
            <div>
              <img
                className="w-[520px]"
                src="/public/images/notfound.png"
                alt=""
              />
            </div>
            <div className="space-y-5">
              <p className=" text-xl lg:text-8xl font-bold">OOPS!</p>
              <p className="text-lg lg:text-5xl">
                Looks like big foot <br />
                has broken the link
              </p>
              <button className="text-white bg-[#566FA7] py-4 px-10 rounded-full">
                <Link to={"/"}>Back to homepage</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
