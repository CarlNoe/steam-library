import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface GameCarouselProps {
	mediaItems: Array<{
		thumbnail: string;
		webm?: { 480?: string; max?: string };
	}>;
}

function GameCarousel(props: GameCarouselProps) {
	const { mediaItems } = props;

	return (
		<div className="mb-4">
			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{mediaItems.map((item, index) => (
					<SwiperSlide key={item.thumbnail}>
						<img
							src={item.thumbnail}
							alt={`media-item-${index}`}
							style={{
								width: '100%',
								maxHeight: 'calc(100vh - 200px)',
								objectFit: 'contain',
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default GameCarousel;
