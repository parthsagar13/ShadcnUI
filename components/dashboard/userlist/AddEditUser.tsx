import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

const formSchema = z.object({
    fname: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lname: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "Email is required." })
        .email({ message: "Please enter a valid email address." }),
});

export function AddEditUser() {
    const [open, setOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fname: "",
            lname: "",
            email: "",
        },
    });
    const { reset } = form;

    const onSubmit = async (data: { fname: string; lname: string; email: string }) => {
        try {
          console.log('Submitting form data:', data);
      
          // Make a POST request
          const response = await axios.post('http://localhost:8000/api/create', data, {
            headers: { 'Content-Type': 'application/json' },
          });
      
          console.log('Response from API:', response.data);
          setOpen(false); // Assuming setOpen closes a dialog
          reset(); // Reset the form
        } catch (error: any) {
          console.error('Error while submitting data:', error.response?.data || error.message);
        }
      };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="flex h-full max-h-full w-full items-center justify-center rounded-lg py-4 text-base font-medium md:ms-4 md:w-[200px]">
                    Create New User
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="dark:text-white dark:placeholder:text-zinc-400">Add User</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="fname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="dark:text-white dark:placeholder:text-zinc-400">First name</FormLabel>
                                    <FormControl>
                                        <Input className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                            placeholder="Enter first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="dark:text-white dark:placeholder:text-zinc-400">Last name</FormLabel>
                                    <FormControl>
                                    <Input className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                            placeholder="Enter lirst name" {...field} />
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
                                    <FormLabel className="dark:text-white dark:placeholder:text-zinc-400">Email</FormLabel>
                                    <FormControl>
                                        <Input className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                            placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Create User</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
