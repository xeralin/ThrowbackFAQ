export function BrowserBlockSteps() {
  return (
    <ul>
      <li>
        <strong>Chrome</strong> — Open <code>chrome://downloads</code>, click
        the three dots next to the blocked entry and select{" "}
        <strong>Keep dangerous file</strong>
      </li>
      <li>
        <strong>Edge</strong> — Click the three dots next to the blocked item
        and select <strong>Keep</strong>. If another warning follows, click{" "}
        <strong>Show more</strong> and press <strong>Keep anyway</strong>
      </li>
      <li>
        <strong>Firefox</strong> — Open the downloads panel in the toolbar,
        click the blocked download and press <strong>Allow Download</strong>
      </li>
    </ul>
  );
}
