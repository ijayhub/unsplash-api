import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Link from 'next/link';
import { format } from "date-fns"

export const getStaticProps = async () => {
	const res = await fetch(
		`https://api.unsplash.com/photos?client_id=${process.env.NEXT_APP_UNSPLASH_API_KEY}`
	);
	const data = await res.json();
	return {
		props: { images: data },
	};
};

const ProfileImg = ({ images }) => {
	return (
		<>
			<Head>
				<title> Unsplash | Home</title>
				<meta name="keywords" content="unsplash-api-clone" />
				<meta name="description" content="unsplash-api-clone" />
			</Head>
			<Navbar />
			<div className='container mx-auto mt-10'>
				<h1 className='text-slate-800 my-10 md:text-3xl font-bold text-center'>
					Recommended images
				</h1>
				<div className='grid grid-cols gap-10 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
					{Object.values(images || {}).map((image) => (
						<div key={image.id} className='bg-slate-300 rounded-xl shadow-lg'>
							<div className='p-5'>
								<img
									src={image.urls.full}
									alt={image.user.name}
									lazy='loading'
									className='h-52 w-full object-cover'
								/>
							</div>
							<div className='p-5 flex items-center justify-start'>
								<img
									src={image.user.profile_image.large}
									alt={image.user.name}
									lazy='loading'
									className='w-20 rounded-full'
								/>
								<ul className='text-slate-600 ml-5 '>
									<li className='font-bold md:text-xl'>{image.user.name}</li>
									<li>{format(new Date(image.created_at), 'dd MMMM yyyy')}</li>
								</ul>
							</div>
							<div className='text-slate-600 text-sm text-right font-bold font-mono mb-2 p-2 '>
								<Link
									href={`https://instagram.com/${image.user.instagran_username}`}>
									<a className='md:text-xl mx-3'>
										<Image
											src='/img/instagram.svg'
											alt='socials'
											width={20}
											height={20}
										/>
									</a>
								</Link>
								<Link
									href={`https://instagram.com/${image.user.twitter_username}`}>
									<a className='md:text-xl '>
										<Image
											src='/img/twitter (2).svg'
											alt='socials'
											width={20}
											height={20}
										/>
									</a>
								</Link>
								<p>Picture upload: {image.likes} Likes</p>
							</div>
						</div>
					))}
				</div>
			</div>
			;
		</>
	);
};
export default ProfileImg;
