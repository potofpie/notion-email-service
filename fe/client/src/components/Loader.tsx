import {FC} from 'react';
export const Loader:FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full text-black"  role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
  