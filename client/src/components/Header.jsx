import { 
    ShoppingCart, 
    UserRound, 
    ChevronDown, 
} from 'lucide-react';
import Category from './Categories';

const Header = () => {
    return ( 
        <>
            <div className="flex w-full justify-center bg-slate-200 py-3">
                <div className="flex justify-between w-11/12 items-center">
                    <a href="/"><h1 className="text-xl text-[#6F757E]">E-Shop</h1></a>
                    <div className='w-1/3 flex'>
                        <input type="text" placeholder="Explore E-Shop" className="p-1.5 outline-none border border-[#CED4DD] w-full" />
                        <button className="bg-[#4B5467] rounded-r-md text-white p-1.5 px-2 text-md">Search</button>
                    </div>
                    <div className='flex space-x-8 text-[#6F757E] items-center'>
                        <div className='cursor-pointer'>
                            <ShoppingCart width={22} />
                        </div>
                        <div className='flex border border-[#CED4DD] p-2.5 px-3 rounded-full space-x-2 cursor-pointer'>
                                <a href={'/admin'}><UserRound width={22} /></a>
                                <ChevronDown width={20} />
                        </div>
                    </div>
                </div>
            </div>

        <div className='w-full flex justify-center py-2 mt-2'>
            <Category />
        </div>

        </>
     );
}
 
export default Header;