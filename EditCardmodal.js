import React from 'react';


function EditCardModal() {
  return (
    <div className="edit-card-modal">
      <h2>Editar Card</h2>
      <form>
        <label>Título</label>
        <input type="text" name="title" />
        <label>Descripción</label>
        <input type="text" name="description" />
        <label>URL de la Imagen</label>
        <input type="text" name="imageUrl" />
        <button type="submit">Guardar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
}

export default EditCardModal;
