import Link from "next/link";
import React from "react";

interface NavCardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const NavCard: React.FC<NavCardProps> = ({
  imageUrl,
  title,
  description,
  href,
}) => {
  return (
    <div className="card p-6 rounded-lg border border-gray-300 shadow-lg max-w-xs transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Satellite Insights"
          className="rounded-t-lg w-full h-40 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href={href}>
          <button className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavCard;
