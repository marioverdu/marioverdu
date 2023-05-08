import type { ComponentType } from "react"

export function openFramerWithUtmTags(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                onClick={(e) => {
                    e.preventDefault()
                    window.open(
                        `https://framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(
                            window?.location?.origin
                        )}`
                    )
                }}
                style={{
                    ...props.style,
                    cursor: "pointer",
                }}
            />
        )
    }
}

export function openFramerWithUtmTagsA(Component): ComponentType {
    return (props) => {
        return (
            <a
                href={`https://framer.com/`} // This is needed for the Google Bot (backlinks)
                title="Custom website builder for designers, agencies and startups." // This is needed for SEO
            >
                <Component
                    {...props}
                    onClick={(e) => {
                        e.preventDefault()
                        window.open(
                            // This is the link that will actually open (it executes JavaScript first)
                            `https://framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(
                                window?.location?.origin
                            )}`
                        )
                    }}
                    style={{
                        ...props.style,
                        cursor: "pointer",
                    }}
                />
            </a>
        )
    }
}
