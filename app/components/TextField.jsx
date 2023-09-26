export default function TextField(props) {
    const size = props.size || 'small'; // Default to 'small' if size prop is not provided
    const pyClass = size === 'large' ? 'py-3' : 'py-1.5';
    const textClass = size === 'large' ? 'sm:text-3xl' : 'sm:text-sm';

    return (
      <div className=" max-w-xs">
        <div className="mt-2">
          <input
            onChange={props.onChange} 
            type={props.type}
            name={props.label}
            id={props.label}
            className={`block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${pyClass} ${textClass}`}
            placeholder={props.placeholder}
            value={props.value}
          />
        </div>
      </div>
    );
}
