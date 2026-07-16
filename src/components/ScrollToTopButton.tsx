type ScrollToTopButtonProps = {
  onClick: () => void;
};

function ScrollToTopButton({ onClick }: ScrollToTopButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg transition hover:bg-blue-500"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
