export default function CaseName(props) {
    return <span className="w-full text-sm pt-1 truncate">{props.children || props.name}</span>
}