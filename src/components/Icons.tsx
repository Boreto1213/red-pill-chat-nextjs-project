import { LucideProps, UserPlus } from "lucide-react";

export const Icons = {
    Logo: (props: LucideProps) => (
        <svg
        {...props}
        height="750px"
        width="750px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.964 511.964"
        xmlSpace="preserve"
      >
        <path
          style={{ fill: "#F5F7FA" }}
          d="M106.658,501.292c-25.639,0-49.746-9.983-67.869-28.107c-37.436-37.435-37.436-98.336,0-135.771
	L337.421,38.78c18.156-18.124,42.248-28.123,67.902-28.123c25.623,0,49.746,9.999,67.869,28.123
	c18.123,18.124,28.123,42.247,28.123,67.87c0,25.654-10,49.746-28.123,67.886L174.544,473.184
	C156.404,491.308,132.296,501.292,106.658,501.292z"
        />
        <path
          style={{ fill: "#E6E9ED" }}
          d="M480.724,31.233c-20.811-20.827-48.121-31.232-75.4-31.232c-27.311,0-54.59,10.405-75.432,31.232
	l-298.65,298.65c-41.652,41.652-41.652,109.179,0,150.832c20.826,20.826,48.121,31.247,75.416,31.247s54.59-10.421,75.416-31.247
	l298.65-298.635C522.377,140.428,522.377,72.886,480.724,31.233z M465.662,166.989L166.998,465.638
	c-16.123,16.108-37.545,24.982-60.34,24.982s-44.215-8.874-60.338-24.982c-16.109-16.108-24.982-37.544-24.982-60.339
	c0-22.796,8.873-44.216,24.982-60.324L344.984,46.31c16.123-16.108,37.529-24.982,60.34-24.982c22.779,0,44.215,8.875,60.338,24.982
	c16.094,16.124,24.967,37.56,24.967,60.339C490.628,129.444,481.755,150.865,465.662,166.989z"
        />
        <path
          style={{ fill: "#ED5564" }}
          d="M250.945,261.012c-23.107-23.092-43.154-48.434-60.027-75.713L38.789,337.413
	c-37.436,37.436-37.436,98.337,0,135.771c18.123,18.124,42.23,28.107,67.869,28.107s49.746-9.983,67.887-28.107l152.129-152.145
	C299.394,304.166,274.052,284.121,250.945,261.012z"
        />
        <path
          style={{ fill: "#DA4453" }}
          d="M166.998,465.638c-16.123,16.108-37.545,24.982-60.34,24.982s-44.215-8.874-60.338-24.982
	c-16.109-16.108-24.982-37.544-24.982-60.339c0-22.796,8.873-44.216,24.982-60.324l150.457-150.457
	c-4-6.125-7.859-12.328-11.531-18.655l-46.168,46.185L31.226,329.899c-41.637,41.652-41.637,109.163,0.016,150.816
	c20.826,20.826,48.121,31.247,75.416,31.247s54.59-10.421,75.416-31.247l154.035-154.004c-6.342-3.672-12.529-7.516-18.654-11.531
	L166.998,465.638z"
        />
      </svg>
    ),
    UserPlus
}

export type Icon =  keyof typeof Icons;