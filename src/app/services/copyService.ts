import { Injectable } from '@angular/core';


@Injectable()
export class CopyService {

    public copyTextToClipboard(text:string) {
        var txtArea = document.createElement("textarea");
        txtArea.id = 'txt';
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = text;
        document.body.appendChild(txtArea);
        txtArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
          if (successful) {
            return true;
          }
        } catch (err) {
          console.log('Oops, unable to copy');
        } finally {
          document.body.removeChild(txtArea);
        }
        return false;
      }

}

