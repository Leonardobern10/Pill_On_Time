import PillsComponent from "../pills/PillsComponent";

export default function PillsComponentHistory({
  name,
  quantity,
  hour,
  takenAt,
  unid,
}: {
  name: string;
  quantity: string;
  hour: string;
  takenAt: string;
  unid: string;
}) {
  return (
    <PillsComponent
      name={name}
      quantity={quantity}
      unid={unid}
      freq="Tomado"
      hour={hour}
      type="history"
      takenAt={takenAt}
    />
  );
}
