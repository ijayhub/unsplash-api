import styles from '../styles/nav.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
			<>
				<div >
					<Image
						src='/img/unsplashLogo.jpg'
						alt='unsplash'
						width={100}
						height={100}
					/>
				</div>
				<div className={styles.showcase}>
					<div className={styles.overlay}>
						<div className={styles.heading}>
							<div>
								<h1 className={styles.header}>Unsplash</h1>
								<p className={styles.text}>
									The internet’s source of{' '}
									<a className='underline'> freely-usable images.</a>
									<br /> Powered by creators everywhere.
								</p>
							</div>
							<form className={styles.form}>
								<input
									type='text'
									placeholder='search free high resolutions-photos'
									className={styles.input}
								/>
								<div>
									<span className={styles.position}>
										<Image
											src='/img/search (1).svg'
											alt='Search'
											width={20}
											height={20}
										/>
									</span>
								</div>
								<div>
									<span className={styles.position1}>
										<Image
											src='/img/maximize.svg'
											alt='Scan'
											width={20}
											height={20}
										/>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		);
}

export default Navbar
