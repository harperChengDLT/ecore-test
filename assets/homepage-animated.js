document.addEventListener('DOMContentLoaded', function () {
  const containerRef = document.getElementById('containerRef');
  // Section - 1
  const titleRef = document.getElementById('titleRef');
  const pathRef = document.getElementById('pathRef');
  // Section - 2
  const card1Ref = document.getElementById('card1Ref');
  const card2Ref = document.getElementById('card2Ref');
  const card3Ref = document.getElementById('card3Ref');
  const text1Ref = document.getElementById('text1Ref');
  const text2Ref = document.getElementById('text2Ref');
  const text3Ref = document.getElementById('text3Ref');
  const titleBoxRef = document.getElementById('titleBoxRef');
  // Section - 3
  const videoTextRef = document.getElementById('videoTextRef');
  const videoRef = document.getElementById('videoRef');
  // Section - 4
  const integratedRef = document.getElementById('integratedRef');
  const ribbonsRef = document.getElementById('ribbonsRef');
  const bikeRef = document.getElementById('bikeRef');
  // Section - 5
  const goRef = document.getElementById('goRef');
  const goDescRef = document.getElementById('goDescRef');
  const applicationsRef = document.getElementById('applicationsRef');

  const path = pathRef
  const pathLength = path.getTotalLength();

  let timeIn = gsap.timeline({
    scrollTrigger: {
      trigger: '#containerRef', // Trigger containerRef
      pin: true,
      pinSpacing: true,
      start: 'top top',
      end: '+=200%',
      scrub: 5,
      markers: true,
    },
  });

  // Section - 1
  gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
  gsap.set(titleRef, { opacity: 0, yPercent: -500 });

  // Section - 2
  gsap.set(titleBoxRef, { opacity: 0 });
  gsap.set(card1Ref, { opacity: 0, yPercent: 100 });
  gsap.set(card2Ref, { opacity: 0, yPercent: 100 });
  gsap.set(card3Ref, { opacity: 0, yPercent: 100 });
  gsap.set(text1Ref, { opacity: 0 });
  gsap.set(text2Ref, { opacity: 0 });
  gsap.set(text3Ref, { opacity: 0 });

  // Section - 3
  gsap.set(videoRef, { opacity: 0, yPercent: 80 });
  gsap.set(videoTextRef, { opacity: 0, yPercent: 50 });

  // Section - 4
  gsap.set(integratedRef, { opacity: 0, yPercent: 100 });
  gsap.set(bikeRef, { opacity: 0, xPercent: -150 });

  // Section - 5
  gsap.set(goRef, { opacity: 0, yPercent: 600 });
  gsap.set(ribbonsRef, { scale: 0.5, opacity: 0, yPercent: 100 });
  gsap.set(goDescRef, { opacity: 0, yPercent: 100 });
  gsap.set(applicationsRef, { opacity: 0, yPercent: 100 });

  // Timeline animations for the sections
  timeIn
    .to(titleRef, { opacity: 1, yPercent: 0, duration: 3 })
    .to(path, { strokeDashoffset: 0, delay: 3, ease: 'power1.out', duration: 3 })
    .to(titleRef, { opacity: 0, yPercent: -500, duration: 3 }, '+=3')
    .to(path, { strokeDasharray: pathLength, strokeDashoffset: -pathLength, ease: 'power1.out', duration: 3 }, '<')
    // Section - 2
    .to(titleBoxRef, { opacity: 1, duration: 3 }, '+=5')
    .to(card1Ref, { yPercent: 0, opacity: 1, duration: 5 }, '<')
    .to(text1Ref, { yPercent: 0, opacity: 1, duration: 5 }, '<')
    .from(card2Ref, { yPercent: 100, opacity: 0, ease: 'power1.out', duration: 1.5, delay: 3 })
    .from(text2Ref, { yPercent: 10, opacity: 0, ease: 'power1.out', duration: 1.2 })
    .to(card1Ref, { scale: 1, yPercent: -0.5, opacity: 0.5 }, '-=0.5')
    .to(text1Ref, { yPercent: -0.8, opacity: 0 }, '-=1.5')
    .to(card2Ref, { yPercent: 0, opacity: 1, duration: 5 })
    .to(text2Ref, { yPercent: 0, opacity: 1, duration: 5 }, '<')
    .from(card3Ref, { yPercent: 100, opacity: 0, ease: 'power1.out', duration: 1.5, delay: 3 })
    .from(text3Ref, { yPercent: 10, opacity: 0, ease: 'power1.out', duration: 1.2 })
    .to(card2Ref, { scale: 1, yPercent: -0.5, opacity: 0.5 }, '-=0.5')
    .to(text2Ref, { yPercent: -0.8, opacity: 0 }, '-=1.5')
    .to(card3Ref, { yPercent: 0, opacity: 1, duration: 5 })
    .to(text3Ref, { yPercent: 0, opacity: 1, duration: 5 }, '<')
    // Section - 3
    .to(card3Ref, { opacity: 0, duration: 3 }, '+=5')
    .to(text3Ref, { opacity: 0, duration: 3 }, '<')
    .to(titleBoxRef, { opacity: 0, duration: 3 }, '<')
    .to(card1Ref, { opacity: 0, duration: 3 }, '<')
    .to(card2Ref, { opacity: 0, duration: 3 }, '<')
    .to(videoRef, { opacity: 1, yPercent: 0, duration: 5, ease: 'power1.out' }, '+=3')
    .to(videoTextRef, { opacity: 1, yPercent: -30, duration: 2 }, '+=1')
    .to(videoRef, { opacity: 1, duration: 1, delay: 10, onStart: () => { videoRef.play() } })
    .to(videoTextRef, { opacity: 0, delay: 3, duration: 1 }, '<')
    // Section - 4
    .to(videoRef, { opacity: 0, duration: 5, yPercent: 20, onStart: () => { videoRef.pause() } }, '+=5')
    .to(integratedRef, { opacity: 1, yPercent: 0, duration: 4 })
    .to(bikeRef, { opacity: 1, xPercent: 0, delay: 1, duration: 10, ease: 'power1.out' })
    .to(bikeRef, { xPercent: 200, duration: 10, ease: 'power1.inOut' })
    .to(integratedRef, { opacity: 0, yPercent: 0, duration: 6, ease: 'power1.inOut' })
    // Section - 5
    .to(goRef, { scale: 2, opacity: 1, yPercent: 520, duration: 1 })
    .to(goRef, { scale: 1, yPercent: 0, delay: 3, duration: 3 })
    .to(ribbonsRef, { scale: 1, opacity: 1, yPercent: 0 }, '-=1')
    .to(goDescRef, { opacity: 1, yPercent: 0, duration: 1 })
    .to(applicationsRef, { opacity: 1, yPercent: 0, duration: 1 }, '-=1');

  return () => {
    timeIn.kill(); // 清除動畫
  };
});

