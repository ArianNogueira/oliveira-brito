'use client'; // necessário se estiver no App Router

export default function MapaIframe() {
  return (
    <div style={{ width: '100%', maxWidth: 'full' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0231043724784!2d-44.217504000000005!3d-2.4992733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f693006d1a7111%3A0xea7fd7a433b56fe6!2sOliveira%20%26%20Brito%20Assessoria%20e%20Servi%C3%A7os%20Cont%C3%A1beis!5e0!3m2!1spt-BR!2sbr!4v1745550596998!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
