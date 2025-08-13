export default function Modal({  onConfirm, onCancel}){
    return (
        <div className="modal-background">
            <div className="modal">
                <p className="modal-message">Are you sure?</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}