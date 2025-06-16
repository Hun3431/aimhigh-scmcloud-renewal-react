import Toggle, { ToggleProps } from ".";

type DarkModeToggleProps = Omit<
  ToggleProps,
  "defaultContent" | "toggleContent"
>;

const DarkModeToggle = (props: DarkModeToggleProps) => {
  return (
    <Toggle
      defaultContent={
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      }
      toggleContent={
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          strokeWidth={0}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      }
      {...props}
    />
  );
};

export default DarkModeToggle;
