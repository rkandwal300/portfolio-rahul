import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactSchema, TZContact } from '../../../lib/contact.schema';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';

export default function Contact() {
  const form = useForm<TZContact>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });
  function handleSubmit(data: TZContact) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <section className="grow mt-8 flex flex-col gap-9 pb-16">
        <h1 className="text-5xl  font-calistoga tracking-wider">contact me.</h1>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-2">
            <Button size={'sm'} type="submit" className="w-full">
              <span>Send Message</span>
              <SendHorizonal size={16} />
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting this form, I agree to the privacy policy.
            </p>
          </div>
        </form>
      </section>
    </Form>
  );
}
