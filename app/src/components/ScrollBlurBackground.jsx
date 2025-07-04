import React, { useEffect, useRef, useState } from 'react';

// This component manages the fixed background image and its blurring effect based on scroll.
// The background will remain fixed and not scroll away with subsequent sections, and will stay blurred.
const ScrollBlurBackground = ({ aboutSectionRef }) => {
	const fixedBackgroundRef = useRef(null);
	const [blurAmount, setBlurAmount] = useState(0);
	const [brightnessAmount, setBrightnessAmount] = useState(1); // New state for brightness (1 = normal, 0.5 = darker)

	useEffect(() => {
		// Ensure necessary refs are available before setting up the scroll listener
		if (!fixedBackgroundRef.current || !aboutSectionRef.current) {
			return;
		}

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;

			// Get the top position of the 'about' section
			const aboutStartScroll = aboutSectionRef.current.offsetTop;

			const maxBlur = 30; // Maximum blur in pixels
			const minBrightness = 0.5; // Minimum brightness (darkest)
			const maxBrightness = 1; // Maximum brightness (normal)

			// --- Blur & Brightness Logic for 'fixedBackground' ---
			let currentBlurAmount = 0;
			let currentBrightnessAmount = maxBrightness; // Start at normal brightness

			// Define the scroll ranges for the blur effect:
			// blurEnterStart: When the top of the 'about' section is at the bottom of the viewport.
			//                 Blur and darkening starts to increase.
			const blurEnterStart = aboutStartScroll - viewportHeight;
			// blurEnterEnd: When the top of the 'about' section is at the top of the viewport.
			//               Blur and darkening reaches its maximum.
			const blurEnterEnd = aboutStartScroll;

			// Calculate blur and brightness based on current scroll position
			if (scrollY >= blurEnterStart && scrollY < blurEnterEnd) {
				// Entering phase: blur increases, brightness decreases
				const progress = (scrollY - blurEnterStart) / (blurEnterEnd - blurEnterStart);
				currentBlurAmount = progress * maxBlur;
				currentBrightnessAmount = maxBrightness - (progress * (maxBrightness - minBrightness));
			} else if (scrollY >= blurEnterEnd) {
				// Once the 'about' section is fully in view or scrolled past, maintain max blur and min brightness
				currentBlurAmount = maxBlur;
				currentBrightnessAmount = minBrightness;
			} else {
				// Before reaching the defined blur range (e.g., in hero section)
				currentBlurAmount = 0;
				currentBrightnessAmount = maxBrightness;
			}

			// Update the state
			setBlurAmount(currentBlurAmount);
			setBrightnessAmount(currentBrightnessAmount);

			// --- Position Change Logic for 'fixedBackground' ---
			// The background will now always remain 'fixed'.
			fixedBackgroundRef.current.style.position = 'fixed';
			fixedBackgroundRef.current.style.top = '0';
		};

		// Add scroll event listener when the component mounts
		window.addEventListener('scroll', handleScroll);

		// Cleanup function: remove event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [aboutSectionRef]); // Dependency array

	return (
		<div
			ref={fixedBackgroundRef}
			className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center z-0 transition-filter duration-500 ease-out"
			style={{
				backgroundImage: `url('/hero-bg.svg')`, // Ensure this path is correct for your project
				filter: `blur(${blurAmount}px) brightness(${brightnessAmount})`, // Apply both blur and brightness via state
			}}
		></div>
	);
};

export default ScrollBlurBackground;