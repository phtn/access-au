import { useResize } from "@/app/hooks";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Chip, Image } from "@nextui-org/react";

export const AboutUs = () => {
  const width = useResize();
  return (
    <div className="my-8 flex w-screen flex-col items-center overflow-clip leading-none md:p-24">
      <div className=" flex h-4 w-full items-center space-x-4 px-8">
        <div className=" w-2/3 skew-x-[24deg] border-4 border-sky-300 px-4" />
        <div className=" w-1/3 skew-x-[24deg] border-4 border-default-800 px-4" />
      </div>
      <div className="flex items-center justify-center space-x-2 px-4 py-10 font-sarabun text-3xl font-semibold tracking-tight md:space-x-4 md:px-6 md:text-5xl portrait:flex-col">
        <div>And here&apos;s how we can</div>
        <div className="flex items-center space-x-2">
          <div> further</div>
          <Button
            variant="shadow"
            color="primary"
            size={width <= 500 ? "sm" : "lg"}
            className="-mb-3 font-sans text-lg font-semibold tracking-tighter md:text-2xl portrait:-mb-2"
          >
            Assist
          </Button>
          <div>you</div>
        </div>
      </div>
      <div className="portrait: px-8 py-4 text-center tracking-tight portrait:text-sm">
        Our platform is specifically designed to provide expert guide for
        International Students that are looking to study in Australia.
      </div>

      <div className="py-10 text-gray-800 portrait:px-4">
        <div className="flex h-12 w-full items-center justify-between text-xs font-bold text-gray-500">
          <div className="flex items-center space-x-2 px-2">
            <WrenchScrewdriverIcon className="size-4" />
            <p>TOOLS</p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <div className="h-fit cursor-pointer rounded-3xl bg-zinc-200 px-2">
            <div className="flex items-center space-x-2 px-2 pt-4">
              <Chip className="medium bg-green-100 px-2 font-sarabun text-xs tracking-tighter text-green-800">
                Tour
              </Chip>
              <Chip className="medium bg-blue-100 px-2 font-sarabun text-xs tracking-tighter text-blue-700">
                Discover
              </Chip>
            </div>
            <div className="space-y-6 px-2 py-4">
              <div>
                <div className="text-lg font-semibold tracking-tighter">
                  Travel Guide to Australia
                </div>
                <div className="text-sm opacity-60">
                  Go for an adventure, from cityscapes to the outback!
                </div>
              </div>
              <div>
                <Image
                  isZoomed
                  isBlurred
                  alt="melbourne"
                  src="https://img.freepik.com/premium-photo/city-square-with-few-people-umbrellas-city-background_976492-58845.jpg?w=1800"
                />
              </div>
            </div>
          </div>

          <div className="h-fit cursor-pointer rounded-3xl bg-indigo-400 px-2">
            <div className="flex items-center space-x-2 px-2 pt-4">
              <Chip className="medium bg-amber-100 px-2 font-sarabun text-xs tracking-tighter text-amber-800">
                College
              </Chip>
              <Chip className="medium bg-blue-100 px-2 font-sarabun text-xs tracking-tighter text-blue-700">
                Study
              </Chip>
            </div>
            <div className="space-y-6 px-2 py-4 text-white">
              <div>
                <div className="text-lg font-semibold tracking-tighter">
                  Apply to Universities
                </div>
                <div className="text-sm opacity-80">
                  Find out how to choose courses.
                </div>
              </div>
              <div>
                <Image
                  isZoomed
                  isBlurred
                  alt="melbourne"
                  src="https://img.freepik.com/premium-photo/large-building-with-clock-front-city-background_1315312-1699.jpg?w=2000"
                />
              </div>
            </div>
          </div>

          <div className="h-fit cursor-pointer rounded-3xl bg-orange-300 px-2">
            <div className="flex items-center space-x-2 px-2 pt-4">
              <Chip className="medium bg-green-100 px-2 font-sarabun text-xs tracking-tighter text-green-800">
                Jobs
              </Chip>
              <Chip className="medium bg-blue-100 px-2 font-sarabun text-xs tracking-tighter text-blue-700">
                Finance
              </Chip>
            </div>
            <div className="space-y-6 px-2 py-4 text-gray-800">
              <div>
                <div className="text-lg font-semibold tracking-tighter">
                  Find Jobs
                </div>
                <div className="text-sm opacity-80">
                  Career opportunities while studying.
                </div>
              </div>
              <div>
                <Image
                  isZoomed
                  isBlurred
                  alt="melbourne"
                  src={`https://img.freepik.com/free-photo/confident-smiling-businesswoman-holding-blue-folder-female-student-beige-suit-holding-blue-folder_1258-117466.jpg?t=st=1726979474~exp=1726983074~hmac=30a4341e1acb3ed03e40f993838db21de84ce200bef515b39e69dbc970bec40b&w=2000`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80rem]" />
    </div>
  );
};
// https://www.freepik.com/premium-photo/city-square-with-few-people-umbrellas-city-background_255402763.htm#fromView=search&page=1&position=6&uuid=fb9ea678-c282-4bdc-bc42-d371e0c29df6
