import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Chip, Image } from "@nextui-org/react";

export const AboutUs = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-xl border md:p-24">
      <div className="w-fit -skew-x-[24deg] rounded-bl-3xl rounded-tl-xl border-b border-l border-primary drop-shadow-sm">
        <div className="flex skew-x-[24deg] items-center justify-center space-x-4 py-6 pl-6 pr-12 font-sarabun text-5xl font-semibold tracking-tight">
          <div>And here&apos;s how we can further</div>
          <Button
            variant="shadow"
            color="primary"
            size="lg"
            className="-mb-3 text-2xl"
          >
            Assist
          </Button>
          <div>you</div>
        </div>
      </div>
      <div className="py-4 tracking-tight">
        Our platform is specifically designed to provide expert guide for
        International Students that are looking to study in Australia.
      </div>

      <div className="py-10 text-gray-800">
        <div className="flex h-12 w-full items-center justify-between text-xs font-bold text-gray-500">
          <div className="flex items-center space-x-2 px-2">
            <WrenchScrewdriverIcon className="size-4" />
            <p>TOOLS</p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
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
                  src="https://img.freepik.com/premium-photo/city-square-with-few-people-umbrellas-city-background_976492-58845.jpg?w=1800"
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
