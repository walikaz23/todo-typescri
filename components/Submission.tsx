"use client";
import { useState, useRef, useEffect } from 'react'; // Added useEffect
import React from 'react'
import { motion } from 'framer-motion' // Removed unused 'transform'

const Button = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [inputText, setInputText] = useState('')
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [isMobile, setIsMobile] = useState(false) // Added state for mobile detection

    // Use useEffect for mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Define different variants for desktop and mobile
    const buttonVariants = {
        initial: {
            width: isMobile ? '90%' : '120px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#bb88cc',
            // Removed x and y
            margin: '16px',
        },
        expanded: {
            width: isMobile ? '90%' : '300px',
            height: '300px',
            borderRadius: '20px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            // Removed x and y
            margin: '16px',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    const handleSubmit = () => {
        if (inputText.trim()) {
            console.log('Submitted text:', inputText)
            setIsExpanded(false)
            setInputText('')
        }
    }

    return (
        <motion.div
            initial="initial"
            animate={isExpanded ? 'expanded' : 'initial'}
            variants={buttonVariants}
            onClick={() => !isExpanded && setIsExpanded(true)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: isExpanded ? 'default' : 'pointer',
                color: isExpanded ? '#000' : '#fff',
                fontWeight: 'bold',
                padding: isExpanded ? '20px' : '0',
                maxWidth: '100%', // Changed from 90% to 100%
                zIndex: 1000,
                marginLeft: '20px',
              }}
        >
            {isExpanded ? (
                <>
                    <textarea
                        ref={inputRef}
                        placeholder={inputText.trim() ? 'Enter your note' : 'You must write to submit'}
                        style={{
                            width: '100%',
                            height: '200px',
                            padding: '10px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            resize: 'none',
                            fontSize: '16px',
                            boxSizing: 'border-box',
                        }}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevent event bubbling
                                setIsExpanded(false)
                            }}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#f1c40f',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            ←
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevent event bubbling
                                handleSubmit()
                            }}
                            disabled={!inputText.trim()}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: inputText.trim() ? '#2ecc71' : '#95a5a6',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                'Add Note'
            )}
        </motion.div>
    )
}

export default Button;