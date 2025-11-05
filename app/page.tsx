'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      // Add sparkles randomly
      if (Math.random() > 0.95) {
        const newSparkle = { id: Date.now(), x: e.clientX, y: e.clientY }
        setSparkles(prev => [...prev, newSparkle])
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
        }, 1000)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const characters = [
    { name: 'Gobo', color: '#FF6B35', description: 'The brave explorer who loves adventure' },
    { name: 'Red', color: '#FF1744', description: 'The athletic daredevil who loves to race' },
    { name: 'Mokey', color: '#9C27B0', description: 'The artistic dreamer and nature lover' },
    { name: 'Wembley', color: '#FFD700', description: 'The indecisive but loyal friend' },
    { name: 'Boober', color: '#00BCD4', description: 'The cautious worrier who loves to do laundry' }
  ]

  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingCircle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={{ left: sparkle.x, top: sparkle.y }}
        />
      ))}

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.titleWord}>FRAGGLE</span>
            <span className={styles.titleWord}>ROCK</span>
          </h1>
          <p className={styles.tagline}>Dance Your Cares Away!</p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Explore Fraggle Rock</button>
            <button className={styles.secondaryBtn}>Watch Now</button>
          </div>
        </div>
      </header>

      {/* Posters Section */}
      <section className={styles.postersSection}>
        <h2 className={styles.sectionTitle}>Iconic Moments</h2>
        <div className={styles.postersGrid}>
          <div className={styles.poster} style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)' }}>
            <div className={styles.posterContent}>
              <div className={styles.posterCircle} style={{ background: '#FFD700' }}></div>
              <div className={styles.posterCircle} style={{ background: '#FF1744', left: '60%' }}></div>
              <h3 className={styles.posterTitle}>DANCE YOUR</h3>
              <h3 className={styles.posterTitle}>CARES AWAY</h3>
              <p className={styles.posterText}>Worries for another day</p>
              <div className={styles.posterDecoration}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.musicNote} style={{ left: `${i * 20}%` }}>♪</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.poster} style={{ background: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)' }}>
            <div className={styles.posterContent}>
              <div className={styles.posterRadial}></div>
              <h3 className={styles.posterTitle}>DOWN AT</h3>
              <h3 className={styles.posterTitle}>FRAGGLE ROCK</h3>
              <p className={styles.posterText}>Where the music never stops</p>
              <div className={styles.posterStars}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={styles.star} style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}>✦</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.poster} style={{ background: 'linear-gradient(135deg, #00BCD4 0%, #3F51B5 100%)' }}>
            <div className={styles.posterContent}>
              <div className={styles.posterWaves}>
                <div className={styles.wave}></div>
                <div className={styles.wave} style={{ animationDelay: '0.5s' }}></div>
                <div className={styles.wave} style={{ animationDelay: '1s' }}></div>
              </div>
              <h3 className={styles.posterTitle}>LET THE</h3>
              <h3 className={styles.posterTitle}>MUSIC PLAY</h3>
              <p className={styles.posterText}>Adventure awaits underground</p>
            </div>
          </div>

          <div className={styles.poster} style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)' }}>
            <div className={styles.posterContent}>
              <div className={styles.posterGrid}>
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={styles.gridSquare} style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
              <h3 className={styles.posterTitle}>THE WORLD OF</h3>
              <h3 className={styles.posterTitle}>FRAGGLES</h3>
              <p className={styles.posterText}>Where friendship is magic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className={styles.charactersSection}>
        <h2 className={styles.sectionTitle}>Meet The Fraggles</h2>
        <div className={styles.charactersGrid}>
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`${styles.characterCard} ${activeCharacter === character.name ? styles.active : ''}`}
              onClick={() => setActiveCharacter(activeCharacter === character.name ? null : character.name)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.characterAvatar} style={{ background: character.color }}>
                <div className={styles.avatarInner}>
                  <span className={styles.avatarLetter}>{character.name[0]}</span>
                </div>
              </div>
              <h3 className={styles.characterName}>{character.name}</h3>
              <p className={styles.characterDescription}>{character.description}</p>
              <div className={styles.characterGlow} style={{ background: character.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Section */}
      <section className={styles.interactiveSection}>
        <div className={styles.interactiveContent}>
          <h2 className={styles.sectionTitle}>Join the Fun!</h2>
          <div className={styles.funButtons}>
            <button className={styles.funBtn} style={{ background: '#FF6B35' }}>
              <span className={styles.funIcon}>🎵</span>
              Sing Along
            </button>
            <button className={styles.funBtn} style={{ background: '#9C27B0' }}>
              <span className={styles.funIcon}>🎨</span>
              Draw
            </button>
            <button className={styles.funBtn} style={{ background: '#00BCD4' }}>
              <span className={styles.funIcon}>🎭</span>
              Play
            </button>
            <button className={styles.funBtn} style={{ background: '#4CAF50' }}>
              <span className={styles.funIcon}>🌟</span>
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>Dance your cares away, worry&apos;s for another day...</p>
          <p className={styles.footerSubtext}>Let the music play, down at Fraggle Rock!</p>
        </div>
      </footer>
    </div>
  )
}
