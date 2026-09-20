# WhatsApp screenshots — social proof

This folder contains the **4 real WhatsApp screenshots** originally
provided by the client (French conversations with real customers), with
the visible message text translated into English at the client's request,
converted to JPEG, and blurred:

```
testimonial-1.jpg
testimonial-2.jpg
testimonial-3.jpg
testimonial-4.jpg
```

(only 4 screenshots were provided to date; to add more, place the file
here and add it to the `images.socialProof` array in
`src/config/product.ts`).

## Translation & blurring applied

Each screenshot's message text was translated from French to English
in-place, keeping the same layout, bubble colors, and timestamps as the
original conversation — no content was added or removed, only translated.

The following were also blurred (Gaussian blur), matching the original
French version:

- the customer's profile photo / avatar (both occurrences where there are
  two, e.g. the header bubble avatar and the voice-message avatar);
- the phone number visible at the top of the conversation;
- **only the third line** of the Google Drive download link shared in the
  conversation (e.g. `rsTTy6590oaKYoXkCSeW_HV2Y`) — the rest of the link
  (`https://drive.google.com/drive/folders/1o5FQGP-`) stays visible for
  authenticity but isn't usable on its own.

As long as a file referenced in `product.ts` isn't present here, a clearly
labeled placeholder is shown instead (no testimonial is fabricated from
scratch).
