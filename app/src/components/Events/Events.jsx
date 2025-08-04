"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import events from '../../data/Events';


// --- Register GSAP Plugin ---
gsap.registerPlugin(ScrollTrigger);

// --- The Main App Component ---
export default function EventsSection() {

	return (
		<div className="ml-148 flex items-center h-full w-max px-[10vw]">
			<div className="flex-shrink-0 text-white pr-16">
				<h2 className="text-6xl font-bold">Our Events</h2>
			</div>
			<div className="flex items-center gap-8 h-full">
				{events.map((event, idx) => (
					<div key={idx} className="card-item flex-shrink-0 w-[400px] h-[550px] bg-gray-800 rounded-2xl shadow-lg">
						<img
							src={event.src}
							className="w-full h-4/5 object-cover rounded-t-2xl"
							alt={event.title}
							onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x550/ff0000/ffffff?text=Error'; }}
						/>
						<div className="p-6">
							<h3 className="text-2xl font-bold">{event.title}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

