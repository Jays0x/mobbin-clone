import { useTheme } from 'next-themes';
import Image from 'next/image';
import BlackLogo from '@/public/black-logo.svg'
import WhiteLogo from '@/public/white-logo.png'

export default function Logo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className='mb-5'>
      {resolvedTheme === 'dark' ? (
        <Image
          src={WhiteLogo} // White logo for dark mode
          alt="Logo"
          width={50}
          height={50}
          priority={true}
        />
      ) : (
        <Image
          src={BlackLogo} // Black logo for light mode
          alt="Logo"
          width={50}
          height={50}
          priority={true}
        />
      )}
    </div>
  );
}
