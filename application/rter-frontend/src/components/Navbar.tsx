import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, CircleDollarSign, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="z-1 border-gray-200 bg-white h-[7vh] w-full justify-center overflow-hidden border-b-2">
      <div className="flex h-[7vh] flex-row items-center justify-between px-10 ">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="img"
            className="h-10 w-10 overflow-hidden"
          />
          <h1 className="text-xl font-bold">CharityHub</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="/favourites" className="">
            <div className="flex items-center">
              <Heart className="mr-1 h-4 w-4" />
              <span className="text-lg">Favourites</span>
            </div>
          </a>
          <a href="/donations">
            <div className="flex items-center">
              <CircleDollarSign className="mr-1 h-4 w-4" />
              <span className="text-lg">Donations</span>
            </div>
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-[2px]">
                <span className="text-lg">Username</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Transactions</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
