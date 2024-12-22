import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2).max(80).nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .email({ message: 'Email is invalid' })
    .nonempty({ message: 'Email is required' })
    .max(50),
  description: z.string().nonempty({ message: 'Description is required' }),
});

export type TZContact = z.infer<typeof ContactSchema>;
