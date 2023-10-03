import React from 'react';

const Footer = () => {
    return(
        <footer className="text-center p-4 mt-8 text-gray-600 bg-black">
        &copy; {new Date().getFullYear()} Yukio PMA. All rights reserved.
      </footer>
    )
};
export default Footer;