$("#example").DataTable({
  dom: "Bfrtip",
  buttons: ["copy", "csv", "excel", "pdf", "print"],
  language: {
    paginate: {
      first: "Primero",
      last: "Último",
      next: "Siguiente",
      previous: "Anterior",
    },
    search: "Buscar",
    lengthMenu: "Mostrando _MENU_ registros",
    info: "Mostrando del _START_ al _END_ de _TOTAL_ datos",
  },
});
