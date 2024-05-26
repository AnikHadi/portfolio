function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to Homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
