export const SuspenseFallback = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="inline-block h-12 w-12 
                    animate-spin rounded-full border-4 
                    border-solid border-white-color border-r-white"
        role="status"
      ></div>
    </div>
  );
};
