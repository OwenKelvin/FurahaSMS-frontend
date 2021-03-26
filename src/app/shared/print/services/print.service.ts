import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  popupPrint(selector: string) {
    const printContents = (document.querySelector(selector) as HTMLTableElement).innerHTML;
    const popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin?.document.open();
    popupWin?.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
            .d-flex  {
              width: 100%;
              display: flex;
              justify-content: space-between;
            }
            .table {
              width: 100%;
              margin-bottom: 1rem;
              color: #212529;
              }

            .table th,
            .table td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
            }

            .table thead th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
            }

            .table tbody + tbody {
            border-top: 2px solid #dee2e6;
            }

            .table-sm th,
            .table-sm td {
            padding: 0.3rem;
            }

            .table-bordered {
            border: 1px solid #dee2e6;
            }

            .table-bordered th,
            .table-bordered td {
            border: 1px solid #dee2e6;
            }

            .table-bordered thead th,
            .table-bordered thead td {
            border-bottom-width: 2px;
            }

            .table-borderless th,
            .table-borderless td,
            .table-borderless thead th,
            .table-borderless tbody + tbody {
            border: 0;
            }

            .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0, 0, 0, 0.05);
            }

            .table-hover tbody tr:hover {
            color: #212529;
            background-color: rgba(0, 0, 0, 0.075);
            }

            .table-active,
            .table-active > th,
            .table-active > td {
            background-color: rgba(0, 0, 0, 0.075);
            }

            @media (max-width: 575.98px) {
            .table-responsive-sm {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }
            .table-responsive-sm > .table-bordered {
            border: 0;
            }
            }

            @media (max-width: 767.98px) {
            .table-responsive-md {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }
            .table-responsive-md > .table-bordered {
            border: 0;
            }
            }

            @media (max-width: 991.98px) {
            .table-responsive-lg {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }
            .table-responsive-lg > .table-bordered {
            border: 0;
            }
            }

            @media (max-width: 1199.98px) {
            .table-responsive-xl {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }
            .table-responsive-xl > .table-bordered {
            border: 0;
            }
            }

            .table-responsive {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }

            .table-responsive > .table-bordered {
            border: 0;
            }

            .table-responsive {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }

            .table-responsive > .table-bordered {
            border: 0;
            }
            @media print {
              .d-print-none {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <section class='d-print-none'>
            <button onclick="window.print();">Print</button>
            <button onclick="window.close();">Cancel</button>
          </section>
            ${printContents}
        </body>
        <script>
        (function() {
           window.print();
        })();
        </script>
      </html>`
    );
  }
}
