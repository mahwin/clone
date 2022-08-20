import type { NextPage } from "next";
import Layout from "../../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-16 space-y-4">
        <div>
          <label className="w-full flex items-center justify-center  text-gray-600 hover:text-orange-400 border-dashed border-2 border-gray-300 h-48 rounded-md cursor-pointer hover:border-orange-400">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            className="appearance-none flex items-center w-full py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
            type="text"
            id="title"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <div className="rounded-md relative shadow-sm flex items-center justify-center">
            <div className="absolute left-0 pl-3  pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              className="appearance-none pl-7 flex items-center w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
              type="text"
              id="price"
              placeholder="0.00"
            />

            <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <div>
            <textarea
              className="mt-1 shadow-sm w-full focus:ring-2 focus:ring-orange-300 rounded-md border-gray-300 
            focus:border-orange-400
            focus:outline-none"
              id="description"
              rows={4}
            />
          </div>
        </div>
        <button className="w-full bg-orange-500 rounded-md focus:outline-none  text-white py-1 focus:ring-orange-300 focus:ring-2 focus:ring-offset-2">
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Upload;