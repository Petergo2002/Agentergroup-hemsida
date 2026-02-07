'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import KnowledgeBaseShowcase from './KnowledgeBaseShowcase'

interface Feature {
    title: string
    subtitle: string
    description: string
    features: string[]
    imageSrc?: string
    component?: ReactNode
}

interface FeatureScrollProps {
    features: Feature[]
}

export default function FeatureScroll({ features }: FeatureScrollProps) {
    const [activeFeature, setActiveFeature] = useState(0)

    return (
        <section className="relative py-20 pb-40 md:py-32 md:pb-64">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: Scrolling Text Content */}
                    <div className="flex flex-col">
                        {features.map((feature, index) => (
                            <FeatureText
                                key={index}
                                feature={feature}
                                index={index}
                                setActiveFeature={setActiveFeature}
                            />
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Sticky Images */}
                    <div className="hidden lg:block relative h-screen sticky top-0 flex items-center justify-center">
                        <div className="relative w-full aspect-square max-h-[600px] flex items-center justify-center">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{
                                        opacity: activeFeature === index ? 1 : 0,
                                        scale: activeFeature === index ? 1 : 0.9,
                                        y: activeFeature === index ? 0 : 20,
                                        zIndex: activeFeature === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl bg-[#050505]"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                                    {feature.component ? (
                                        <div className="w-full h-full flex items-center justify-center bg-[#050505]">
                                            {feature.component}
                                        </div>
                                    ) : (
                                        feature.imageSrc && (
                                            <img
                                                src={feature.imageSrc}
                                                alt={feature.title}
                                                className="w-full h-full object-contain p-4"
                                            />
                                        )
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


function FeatureText({
    feature,
    index,
    setActiveFeature
}: {
    feature: Feature;
    index: number;
    setActiveFeature: (index: number) => void
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

    useEffect(() => {
        if (isInView) {
            setActiveFeature(index)
        }
    }, [isInView, index, setActiveFeature])

    return (
        <motion.div
            ref={ref}
            id={`feature-text-${index}`}
            className={`min-h-screen flex flex-col justify-center py-20 transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-30 blur-[1px]'
                }`}
        >
            <div className="max-w-xl">
                <span className="text-[#FF5D00] font-mono tracking-widest text-sm uppercase mb-4 block">
                    {feature.subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                    {feature.title}
                </h2>
                <p className="text-xl text-white/60 leading-relaxed mb-10">
                    {feature.description}
                </p>

                {/* Mobile Image (Visible only on small screens) */}
                {/* <div className="lg:hidden mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                <img src={feature.imageSrc} alt={feature.title} className="w-full h-auto object-cover" />
            </div> */}

                <div className="flex flex-wrap gap-3">
                    {feature.features.map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5D00]" />
                            <span className="text-white/80 font-medium text-sm">{tag}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
