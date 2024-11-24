import { 
    TableProperties,
    Smartphone,
    Tablet,
    Laptop,
    Monitor,
    Watch,
    Tv,
    Captions,
} from 'lucide-react';
const Category = () => {
    return ( 
            <div className='md:flex hidden justify-between w-11/12 text-[#6F757E]'>
                <span className='flex gap-x-2 cursor-pointer'>
                    <TableProperties width={15} />
                    All
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Smartphone width={15} />
                    Iphone
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Tablet width={15} />
                    Ipad
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Laptop width={15} />
                    Laptop
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Monitor width={15} />
                    Desktop
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Watch width={15} />
                    Watch
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Tv width={15} />
                    Tv
                </span>
                <span className='flex gap-x-2 cursor-pointer'>
                    <Captions width={15} />
                    Accesories
                </span>
            </div>
     );
}
 
export default Category;