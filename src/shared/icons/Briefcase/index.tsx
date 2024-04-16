import { SVGProps, Ref, forwardRef, memo } from "react";
import { ThemeIcons } from "../types";

interface Props extends SVGProps<SVGSVGElement> {
  theme?: ThemeIcons;
}
const SvgComponent = (
  { theme = "light", ...props }: Props,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M21 6H16.5V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3H9.75C9.15326 3 8.58097 3.23705 8.15901 3.65901C7.73705 4.08097 7.5 4.65326 7.5 5.25V6H3C2.60218 6 2.22064 6.15804 1.93934 6.43934C1.65804 6.72064 1.5 7.10218 1.5 7.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6ZM9 5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36032 4.57902 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V6H9V5.25ZM21 7.5V10.5H18V9.75C18 9.55109 17.921 9.36032 17.7803 9.21967C17.6397 9.07902 17.4489 9 17.25 9C17.0511 9 16.8603 9.07902 16.7197 9.21967C16.579 9.36032 16.5 9.55109 16.5 9.75V10.5H7.5V9.75C7.5 9.55109 7.42098 9.36032 7.28033 9.21967C7.13968 9.07902 6.94891 9 6.75 9C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75V10.5H3V7.5H21ZM21 18H3V12H6V12.75C6 12.9489 6.07902 13.1397 6.21967 13.2803C6.36032 13.421 6.55109 13.5 6.75 13.5C6.94891 13.5 7.13968 13.421 7.28033 13.2803C7.42098 13.1397 7.5 12.9489 7.5 12.75V12H16.5V12.75C16.5 12.9489 16.579 13.1397 16.7197 13.2803C16.8603 13.421 17.0511 13.5 17.25 13.5C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75V12H21V18Z"
      fill="var(--dark-100)"
      opacity={theme === "dark" ? 0 : 1}
    />
    <path
      d="M21 6H16.5V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3H9.75C9.15326 3 8.58097 3.23705 8.15901 3.65901C7.73705 4.08097 7.5 4.65326 7.5 5.25V6H3C2.60218 6 2.22064 6.15804 1.93934 6.43934C1.65804 6.72064 1.5 7.10218 1.5 7.5V10.125C1.5 10.2245 1.53951 10.3198 1.60984 10.3902C1.68016 10.4605 1.77554 10.5 1.875 10.5H6V9.02531C5.99692 8.83144 6.06748 8.64361 6.19745 8.49972C6.32742 8.35583 6.50712 8.26659 6.70031 8.25C6.8029 8.24319 6.9058 8.25754 7.00261 8.29217C7.09941 8.3268 7.18807 8.38096 7.26306 8.4513C7.33806 8.52163 7.39779 8.60664 7.43855 8.70103C7.47931 8.79542 7.50023 8.89718 7.5 9V10.5H16.5V9.02531C16.4969 8.83144 16.5675 8.64361 16.6974 8.49972C16.8274 8.35583 17.0071 8.26659 17.2003 8.25C17.3029 8.24319 17.4058 8.25754 17.5026 8.29217C17.5994 8.3268 17.6881 8.38096 17.7631 8.4513C17.8381 8.52163 17.8978 8.60664 17.9385 8.70103C17.9793 8.79542 18.0002 8.89718 18 9V10.5H22.125C22.2245 10.5 22.3198 10.4605 22.3902 10.3902C22.4605 10.3198 22.5 10.2245 22.5 10.125V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6ZM15 6H9V5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36032 4.57902 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V6ZM22.5 12.375V18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V12.375C1.5 12.2755 1.53951 12.1802 1.60984 12.1098C1.68016 12.0395 1.77554 12 1.875 12H6V13.5C5.99977 13.6028 6.02069 13.7046 6.06145 13.799C6.10221 13.8934 6.16194 13.9784 6.23694 14.0487C6.31193 14.119 6.40059 14.1732 6.49739 14.2078C6.5942 14.2425 6.6971 14.2568 6.79969 14.25C6.99288 14.2334 7.17258 14.1442 7.30255 14.0003C7.43252 13.8564 7.50308 13.6686 7.5 13.4747V12H16.5V13.5C16.4998 13.6028 16.5207 13.7046 16.5615 13.799C16.6022 13.8934 16.6619 13.9784 16.7369 14.0487C16.8119 14.119 16.9006 14.1732 16.9974 14.2078C17.0942 14.2425 17.1971 14.2568 17.2997 14.25C17.4925 14.2334 17.672 14.1445 17.8019 14.001C17.9318 13.8575 18.0026 13.6701 18 13.4766V12H22.125C22.2245 12 22.3198 12.0395 22.3902 12.1098C22.4605 12.1802 22.5 12.2755 22.5 12.375Z"
      fill="var(--dark-100)"
      opacity={theme === "dark" ? 1 : 0}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconBriefcase };
