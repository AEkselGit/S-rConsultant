interface Form_FieldValues {
  label: string;
  name: string;
}

export default function FormField(props: Form_FieldValues) {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{props.label}</label>
      <input
        name={props.name}
        className="bg-background border-2 rounded"
      />
    </div>
  );
}
