// Import the `dynamic` function from the `next/dynamic` module.
import dynamic from "next/dynamic";

// Import the React module.
import React from "react";

// Define a functional React component named `Home`.
export default function Home() {
	// Dynamically import the `MyMap` component.
	// The loading option provides a loading message.
	// The ssr option disables server-side rendering.
	const MyMap = dynamic(() => import("../components/MyMap"), {
		loading: () => <p>A map is loading</p>,
		ssr: false,
	});

	// Render the dynamically imported `MyMap` component.
	return <MyMap />;
}
